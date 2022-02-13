console.log('hi');
//--

// INPUT for new identity card

  // all info that comes from MEEEE as the client (=the caller of the function)
  const firstname = "Rob"
  const lastname = "Whatever"
  const familyname = "Whatever Elderly"
  const birthDate = "01.01.1871"
  const eyeColor = "bluegrey"
  const height = "181cm"
  
  // EXPECTED OUTPUT => identity card
  const id = "123345574271"
  const ausstellendesAmt = "Bezirksamt Neukölln"
  const expireDate = "01.01.2027" // date when this ID gets invalid 
  
  
  const getMyFreakinIdentityCardFromFuckingLazyAmtPeople = (
    firstName, lastName, birthDate, height, eyeColor,  
  ) => {
  
    // actions the amt does... (we are not super interested in all the details)
    // PRE-checks
  
    // Example internals:
    // calculate expire date today? => 03.03.2022 => expireDate = 03.03.2032
  
    // OUTPUT: identity card + all inpit field + ID, ausstellende behörde, expireDate
  
    // return all new info as ARRAY
    // const output = [
    //   firstName, lastName, birthDate, height, eyeColor,
    //   "1234567", "Bezirksamt Neukölln", "03.03.2032"
    // ]
  
    // return all new info as OBJECT
    const output = {
      firstName, lastName, birthDate, height, eyeColor,
      id: "1234567", behoerde: "Bezirksamt Neukölln", expireDate: "03.03.2032"
    }
  
    return output
  }
  
  
  // this is my input that fu*** amt wants to know! okay...
  
  const output = getMyFreakinIdentityCardFromFuckingLazyAmtPeople( 
    firstname, lastname, birthDate, height, eyeColor 
  )
  
  console.log( output )