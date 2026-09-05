export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    theme: import("../features/ThemeSlice").ThemeState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        theme: import("../features/ThemeSlice").ThemeState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//# sourceMappingURL=Store.d.ts.map