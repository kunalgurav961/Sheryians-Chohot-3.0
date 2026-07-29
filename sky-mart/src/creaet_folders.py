import os

# Root folder
root = "src"

# Folder structure
folders = [
    "assets/images",
    "assets/icons",
    "services",
    "utils",
]

# Files to create
files = [

    "components/Navbar.jsx",
    "components/Footer.jsx",
    "components/ProductCard.jsx",
    "components/Button.jsx",

    "pages/Home.jsx",
    "pages/Products.jsx",
    "pages/ProductDetails.jsx",
    "pages/Cart.jsx",
    "pages/Login.jsx",
    "pages/Register.jsx",
    "pages/NotFound.jsx",

    "context/AppContext.jsx",

    "routes/AppRoutes.jsx",

    "services/api.js",

    "utils/helpers.js",
]

# Create folders
for folder in folders:
    os.makedirs(os.path.join(root, folder), exist_ok=True)

# Create files
for file in files:
    path = os.path.join(root, file)
    with open(path, "w", encoding="utf-8") as f:
        pass  # Creates an empty file

print("✅ SkyMart folder structure created successfully!")