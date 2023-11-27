import axios from '../BASE_API';
import AuthHeader from '../AuthHeader';



class PackageAPI {
 
    getDetails: any = () => {

        return axios.get(`/user/me`, {
          headers: AuthHeader(),
        })
      }

    updateProfile: any = (data: any) => {
        return axios.put(
          '/admin/profile/update',data,
          { headers: AuthHeader() },
        )
      }

}

export default new  PackageAPI();