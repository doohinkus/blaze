  const formatPhoneNumber = (_number) => {
    return _number.split("")
                  .map((_number,index) => index === 2 || index === 5 ?
                  _number + "-" :
                  _number)
                  .join("")
  }

  export {formatPhoneNumber}