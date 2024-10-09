import { test, expect, request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;

test.describe('Teste de API - GET', () => {
  test.beforeAll(async ({ playwright }) => {
    apiContext = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('Valida retorno do get posts/1', async () => {
    const response = await apiContext.get('/posts/1');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.userId).toBe(1); 
    expect(responseBody.title).toContain('provident occaecati');
    expect(responseBody.body).toBeDefined(); 
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });
});
