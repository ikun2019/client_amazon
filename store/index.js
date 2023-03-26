export const state = () => ({
  // 状態
  cart: [],
  cartLength: 0
});

export const actions = {
  addProductToCart({ state, commit }, product) {
    // cartの中に既に製品があるか確認
    const cartProduct = state.cart.find(prod => prod.id === product.id);

    if (!cartProduct) {
      // cartの中に製品がない場合は、postProductToCartメソッドを実行
      commit('postProductCart', product);
    } else {
      // cartに製品が存在する場合はincrementProductQtyで製品を増加
      commit('incrementProductQty', cartProduct);
    }
    // cart内の数を増加
    commit('incrementCartLength');
  }
};

export const mutations = {
  postProductCart(state, product) {
    product.quantity = 1;
    state.cart.push(product);
  },
  incrementProductQty(state, product) {
    product.quantity++;
    // カートの中のproductがあるindex番号を取得
    let indexOfProduct = state.cart.indexOf(product);
    // 指定したproductのデータを入れ替える
    state.cart.splice(indexOfProduct, 1, product);
  },
  incrementCartLength(state) {
    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity;
      })
    }
  }
};

export const getters = {
  getCartLength(state) {
    return state.cartLength;
  },
  getCart(state) {
    return state.cart;
  },
  getCartTotalPrice(state) {
    let total = 0;
    state.cart.map(product => {
      total += product.price * product.quantity;
    });
    return total;
  }
};