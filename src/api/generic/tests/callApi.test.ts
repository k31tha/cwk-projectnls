import {expect, it} from 'vitest';
import {basicName, nameType, basicApi, safeParseApi, API_URL} from '../callApi';
import {ClubFullDetail, clubFullDetailSchema} from '../../club/getClubDetails';
describe('Testing getUser from callApi', () => {
  //it('Fetch user', async () => {
  //  const result = await getClub({urlFriendlyName: 'llllawoking'});
  //  console.dir(result);
  //  expect(result.data.ClubName).toBe('Woking11');
  //});
  it('check basic name', async () => {
    const result = await basicName<nameType>('woking', 'fc');
    //console.log(result);
    expect(result.name).toBe('hello woking fc');
  });

  it('check basic api', async () => {
    const result = await basicApi<ClubFullDetail>(
      `${API_URL}/api/v2/clubapi/clubfulldetail/woking`,
      {method: 'GET'},
    );
    //console.dir(result);
    expect(result.data?.ClubName).toBe('Woking');
    expect(result.status).toBe(200);

    const result2 = await basicApi<ClubFullDetail>(
      `${API_URL}/api/v2/clubapi/clubfulldetail/woking-not-exist`,
      {method: 'GET'},
    );
    expect(result2.status).toBe(404);
    const result3 = await basicApi<ClubFullDetail>(
      `${API_URL}/patherror/api/v2/clubapi/clubfulldetail/woking-not-exist`,
      {method: 'GET'},
    );
    expect(result3.status).toBe(500);
  });
  it.skip('check basic api post with schema validation error', async () => {
    const result = await safeParseApi<ClubFullDetail>(
      `${API_URL}/api/v2/clubapi/clubfulldetail/abbey-rangers-fc`,
      clubFullDetailSchema,
      {method: 'GET'},
    );
    //expect(result.data?.data.ClubName).toBe('Woking');
    expect(result.status).toBe(500);
    expect(result.schemaError).not.toBeNull();
  });

  it('check basic api post with no schema validation error', async () => {
    const result = await safeParseApi<ClubFullDetail>(
      `${API_URL}/api/v2/clubapi/clubfulldetail/woking`,
      clubFullDetailSchema,
      {method: 'GET'},
    );
    expect(result.data?.ClubName).toBe('Woking');
    expect(result.status).toBe(200);
  });
});
