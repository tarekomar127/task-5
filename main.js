import express from 'express';
import mysql2 from 'mysql2/promise';

const app = express();
const port = 3000;

const db = await mysql2
    .createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'retail_store',
        port: 3306,
    })
    .catch(() => {
        console.log('failed to connect database');
    });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/products', async (req, res) => {
    try {

        // 2 - Add category column
        // const [result] = await db.execute('ALTER TABLE products ADD COLUMN category VARCHAR(255)');
        // res.json({ message: 'Category column added successfully', result });

        // 3 - Drop category column
        // const [result] = await db.execute('ALTER TABLE products DROP COLUMN category');
        // res.json(result);

        // 4 - Modify supplier contact_number
        // const [result] = await db.execute('ALTER TABLE supplier MODIFY COLUMN contact_number VARCHAR(15)');
        // res.json({ message: 'Contact number column modified successfully', result });

        // 5 - Modify product_name to NOT NULL
        // const [result] = await db.execute('ALTER TABLE products MODIFY COLUMN product_name VARCHAR(255) NOT NULL');
        // res.json({ message: 'Product name column modified successfully', result });

        // 6 - Insert new supplier
        // const [result] = await db.execute(
        //     'INSERT INTO supplier (supplier_name, contact_number) VALUES (?, ?)',
        //     ['freshFoods', '01001234567']
        // );
        // res.json({ message: 'New supplier added successfully', result });

        // 6b - Insert multiple products
        // const [result] = await db.execute(
        //     `INSERT INTO products (product_name, price, stock_quantity, supplier_id) VALUES
        //      (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?)`,
        //     ['milk', 15, 50, 2, 'bread', 10, 30, 2, 'eggs', 20, 40, 2]
        // );
        // res.json({ message: 'New products added successfully', result });

        // 6c - Insert new sale
        // const [result] = await db.execute(
        //     'INSERT INTO sales (product_id, quantity_sold, sales_date) VALUES (?, ?, ?)',
        //     [4, 2, '2025-05-20']
        // );
        // res.json({ message: 'New sale recorded successfully', result });

        // 7 - Update product price
        // const [result] = await db.execute('UPDATE products SET price = ? WHERE product_name = ?', [25, 'bread']);
        // res.json({ message: 'Product price updated successfully', result });

        // 8 - Delete product
        // const [result] = await db.execute('DELETE FROM products WHERE product_name = ?', ['eggs']);
        // res.json({ message: 'Product deleted successfully', result });

        // 9 - Get all sales quantities
        // const [result] = await db.execute('SELECT quantity_sold FROM sales');
        // res.json({ message: 'Sales data retrieved successfully', result });

        // 10 - Get product with highest stock
        // const [result] = await db.execute(
        //     'SELECT product_name FROM products WHERE stock_quantity = (SELECT MAX(stock_quantity) FROM products)'
        // );
        // res.json({ message: 'Most available product retrieved successfully', result });

        // 11 - Get products with no sales
        // const [result] = await db.execute(
        //     'SELECT p.* FROM products p LEFT JOIN sales s ON p.product_id = s.product_id WHERE s.quantity_sold IS NULL OR s.quantity_sold = 0'
        // );
        // res.json({ message: 'Products with zero sales retrieved successfully', result });

        // 12 - Get sales with product names
        // const [result] = await db.execute(
        //     'SELECT p.product_name, s.sales_id, s.sales_date FROM sales s JOIN products p ON s.product_id = p.product_id'
        // );
        // res.json({ message: 'Sales with product names retrieved successfully', result });

    } catch (err) {
        console.log('failed', err);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
