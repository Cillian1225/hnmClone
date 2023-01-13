/**Middleware function**/
function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = ` https://my-json-server.typicode.com/Cillian1225/hnmClone/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };
