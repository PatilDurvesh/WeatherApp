import {test, expect} from '@playwright/test'

test.describe('Weather App', ()=> {
    test('home page loads correctly', async ({page}) =>{
        await page.goto('/');   
        
        await expect(page).toHaveTitle('/WeatherApp/i');

        await expect(page.getByRole('heading', { name: /weather/i})).toBeVisible();

        await expect(page.getByPlaceholder(/city/i)).toBeVisible();
    })
    
    test('shows weather results when searching for a city', async ({page}) => {
        await page.goto('/');
        
        await page.getByPlaceholder(/city/i).fill('Surat');
        
        await page.getByRole('button', { name : /search/i }).click();
        
        await expect(page.getByText(/ %/)).tovisible();
    });
});