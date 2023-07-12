import { httpService } from '../httpService/httpService';
import { InvitationPostModel } from '../../models/invitation.model';

class InvitationService {
  private INVITATION_ENDPOINT = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

  postInvitation(payload: InvitationPostModel): Promise<void> {
    return httpService
      .post<void>(this.INVITATION_ENDPOINT, payload)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response.data.errorMessage));
  }
}

export const invitationService = new InvitationService();
