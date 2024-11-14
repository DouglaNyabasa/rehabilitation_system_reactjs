import express from 'express';
import got from 'got'


const router = express.Router();

const getAccessToken = async ()=>{
    try {
        const response = await got.post(
            `${process.env.PAYPAL_BASEURL}/v1/oauth2/token`,
            {
                form:{
                    grant_type : "client_credentials",
                },
                username: process.env.PAYPAL_CLIENTID,
                password: process.env.PAYPAL_SECRET
            }
        );
        console.log(response.body);
        const data = JSON.parse(response.body);
        const newAccessToken = data.access_token;
        return access_token;
        
        
    } catch (error) {
        throw new Error(error)
    }
}

const createOrder = async(resizeBy,req)=>{
    try {

        const accessToken = await getAccessToken();
        return resizeBy.status(200).json({message:"payment made successfully"})
        
    } catch (error) {
        resizeBy.status(500).json({error:"internal server error"})
        
    }


}

router.post('/createOrder',createOrder)

export default router;