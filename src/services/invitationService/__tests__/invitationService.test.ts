import { invitationService } from '../invitationService';
import { httpService } from '../../httpService/httpService';

describe('Invitation Service', () => {
  it('should post an Invitation successfully', async () => {
    jest.spyOn(httpService, 'post').mockResolvedValue({ data: 'some data' });

    const result = await invitationService.postInvitation({
      name: 'name',
      email: 'email'
    });

    expect(result).toEqual('some data');
  });

  it('should post an Invitation unsuccessfully', async () => {
    jest.spyOn(httpService, 'post').mockRejectedValue({ response: { data: { errorMessage: 'error' } } });

    try {
      await invitationService.postInvitation({
        name: 'name',
        email: 'email'
      });
    } catch (error) {
      expect(error).toEqual('error');
    }
  });
});
