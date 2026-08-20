import { api } from "@/api/axios_instance";

export default async function getUserInfo(){

    const res = await api.get("/api/user/me/");

    return res.data;
}