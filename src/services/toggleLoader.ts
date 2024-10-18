export const toggleLoader = (loading: boolean) => {
  const merLoader = document.querySelector("mer-loader");
  if (merLoader) {
    const loader = merLoader.shadowRoot?.getElementById("loader-wrapper");
    if (loader) loader.style.display = loading ? "flex" : "none";
  }
};
