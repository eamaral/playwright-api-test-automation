import { test, expect, request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;

test.describe('Teste de API - POST', () => {
    test.beforeAll(async ({ playwright }) => {
        apiContext = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });
    });

    test('Valida envio do post', async () => {
        const response = await apiContext.post('/posts', {
            data: {
                title: 'Teste Playwright',
                body: 'Este é um post de teste',
                userId: 1,
            }
        });
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody.title).toBe('Teste Playwright');
    });

    test.afterAll(async () => {
        await apiContext.dispose();
    });
});