import productsData from './data/products.json';

test('catalog has products ready to publish', () => {
  expect(productsData.productos.length).toBeGreaterThan(0);
  expect(productsData.productos[0]).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      nombre: expect.any(String),
      precio: expect.any(Number),
      imagen: expect.any(String),
    })
  );
});
