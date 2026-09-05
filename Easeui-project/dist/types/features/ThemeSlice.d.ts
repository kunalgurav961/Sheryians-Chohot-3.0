export type ThemeState = {
    mode: "light" | "dark";
};
export declare const toggleTheme: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"theme/toggleTheme">, setTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<"light" | "dark", "theme/setTheme">;
declare const _default: import("redux").Reducer<ThemeState>;
export default _default;
//# sourceMappingURL=ThemeSlice.d.ts.map