export function deposit(amount) {
    return function (dispatch) {
    
    //axios.get(url)
      return dispatch({
        type: 'DEPOSIT',
        timestamp: Date(),
        amount: Math.abs(amount)
      });
    };
  }
  export function withdraw(amount) {
    return function (dispatch) {
        return dispatch({
        type: 'WITHDRAW',
        timestamp: Date(),
        amount: Math.abs(amount)
      });
    };
  }
  //openaccount
  //close()
