export function getCookie(key: string) {
    const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }
  
  export function currencyFormat(amount: number) {
    return 'PLN' + (amount/1).toFixed(2);
  }