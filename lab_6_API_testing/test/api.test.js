const request = require('supertest');
const expect = require('chai').expect;

// Базовий URL API
const baseURL = 'https://gorest.co.in/public/v2';

describe('GoRest API Tests', () => {
    const authHeader = {
        Authorization: 'Bearer 8b2c079722b55e8570822369f1802626be3b30e3a6faed6205c439c729d4fc6f'  // мій токен доступу
    };
    
    // 1. Тест для створення нового користувача
    it('should create a new user', async () => {
        const response = await request(baseURL)
            .post('/users')
            .set(authHeader)
            .send({
                name: 'Test User',
                gender: 'male',
                email: `testuser${Date.now()}@example.com`, // Унікальна електронна пошта для кожного тесту
                status: 'active'
            });
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        expect(response.body.name).to.equal('Test User');
    });

    // 2. Тест для отримання списку користувачів
    it('should fetch a list of users', async () => {
        const response = await request(baseURL)
            .get('/users')
            .set(authHeader);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
    });

    // 3. Тест для оновлення користувача
    it('should update a user\'s information', async () => {
        // Створення користувача для оновлення
        const createResponse = await request(baseURL)
            .post('/users')
            .set(authHeader)
            .send({
                name: 'Update Test User',
                gender: 'female',
                email: `updatetestuser${Date.now()}@example.com`,
                status: 'active'
            });
        
        const userId = createResponse.body.id;

        // Оновлення інформації про користувача
        const updateResponse = await request(baseURL)
            .put(`/users/${userId}`)
            .set(authHeader)
            .send({
                name: 'Updated Name',
                status: 'inactive'
            });
        expect(updateResponse.status).to.equal(200);
        expect(updateResponse.body.name).to.equal('Updated Name');
        expect(updateResponse.body.status).to.equal('inactive');
    });

    // 4. Тест для видалення користувача
    it('should delete a user', async () => {
        // Створення користувача для видалення
        const createResponse = await request(baseURL)
            .post('/users')
            .set(authHeader)
            .send({
                name: 'Delete Test User',
                gender: 'male',
                email: `deletetestuser${Date.now()}@example.com`,
                status: 'active'
            });
        
        const userId = createResponse.body.id;

        // Видалення користувача
        const deleteResponse = await request(baseURL)
            .delete(`/users/${userId}`)
            .set(authHeader);
        expect(deleteResponse.status).to.equal(204);

        // Перевірка, що користувач видалений
        const fetchDeletedUser = await request(baseURL)
            .get(`/users/${userId}`)
            .set(authHeader);
        expect(fetchDeletedUser.status).to.equal(404);
    });
});
