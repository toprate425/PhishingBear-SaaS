import { generateQueryParams } from '../src/utils/services';
import CommonService from './common.service';

class UserServices extends CommonService {
  async getUsers(params: any) {
    return await this.get(params.filters.first_name === '' ? `users?${new URLSearchParams(params)}` : `users?${generateQueryParams({ filter: params.filters })}`)
  }
  async getUserDetail(UserId: any) {
    return await this.get(`users/${UserId}`)
  }
  async updateUserProfile(params: any) {
    return await this.put('update-profile', params)
  }
  async sendFriendRequest(params: any) {
    return await this.post('friends', { friend_id: params })
  }
  async getFriends(params: any) {
    return await this.get(`friends/?${new URLSearchParams(params)}`)
  }
  async updateFriends(params: any) {
    console.log('params', params);
    return await this.put(`friends/${params}`, { status: 'active' })
  }
}

export const userServices = new UserServices();