import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { SkyMart } from "../context/AppContext";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const password = watch("password");
    const { navigate, users, setUsers, isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser } = useContext(SkyMart)
    const onSubmit = (data) => {
        // Remove confirmPassword before saving
        const { confirmPassword, ...newUser } = data;

        // Check if email already exists
        const userExists = users.some((user) => user.email === newUser.email);

        if (userExists) {
            alert("User already exists!");
            return;
        }

        // Add new user
        const updatedUsers = [...users, newUser];

        // Update state
        setUsers(updatedUsers);
        setCurrentUser(newUser);
        setIsLoggedIn(true);

        // Save to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        localStorage.setItem("isLoggedIn", JSON.stringify(true));

        // Redirect
        navigate("/");
    };
    return (
        <div className="min-h-screen text-black flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-sky-600">
                    SkyMart
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Create your account
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >
                    {/* Name */}
                    <div>
                        <label className="block mb-2">Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border rounded-lg px-4 py-2"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Minimum 3 characters",
                                },
                            })}
                        />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.name?.message}
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2">Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-lg px-4 py-2"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value:
                                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                    message: "Invalid email",
                                },
                            })}
                        />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.email?.message}
                        </p>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2">Password</label>

                        <input
                            type="password"
                            placeholder="Create password"
                            className="w-full border rounded-lg px-4 py-2"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters",
                                },
                            })}
                        />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.password?.message}
                        </p>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-2">Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full border rounded-lg px-4 py-2"
                            {...register("confirmPassword", {
                                required: "Confirm your password",
                                validate: (value) =>
                                    value === password || "Passwords do not match",
                            })}
                        />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword?.message}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2.5 rounded-lg font-semibold"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-sky-600 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;