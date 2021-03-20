import axios from "axios";
import config from './config.json';
const base = config.url + ":" + config.port;
class StatusService{
    async toggle(){
        return await axios.get(base + "/toggle");
    }
    async on(){
        return await axios.get(base + "/on");
    }
    async off(){
        return await axios.get(base + "/off");
    }
    async status(){
        return await axios.get(base + "/");
    }
}
export default new StatusService();