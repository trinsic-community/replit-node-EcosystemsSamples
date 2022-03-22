const { AccountService, SignInRequest } = require("@trinsic/trinsic");

async function signIn() {
    let service = new AccountService();

    let authToken = await service.signIn(new SignInRequest());

    let info = await service.info();
  
    console.log({authToken, ...info.toObject()});
}

signIn();