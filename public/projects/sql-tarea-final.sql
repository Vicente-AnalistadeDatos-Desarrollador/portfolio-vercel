CREATE DATABASE tareabasededatos;

USE tareabasededatos;


-- Ejercicio 2.1

SELECT
  country,
  status,
  COUNT(*) AS total_operations,
  ROUND(AVG(amount),2) AS average_amount
FROM orders
WHERE
  created_at > '2015-07-01'
  AND country IN ('Francia', 'Portugal', 'Espana')
  AND amount > 100
  AND amount < 1500
GROUP BY
  country,
  status
ORDER BY
  average_amount DESC
  
-- Ejercicio 2.2

SELECT
  country,
  COUNT(*) AS total_orders,
  MAX(amount) AS max_amount,
  MIN(amount) AS min_amount
FROM orders
WHERE
  status != 'Delinquent'
  AND status != 'Cancelled'
  AND amount > 100
GROUP BY country
ORDER BY total_orders DESC
LIMIT 3;

-- Ejercicio 3.1


SELECT
    O.merchant_id,
    M.name AS nombre,
    O.country AS país,
    COUNT(O.order_id) AS total_operaciones,
    AVG(O.amount) AS valor_promedio,
    COUNT(R.amount) AS total_reembolsos,
    CASE WHEN SUM(R.amount) > 0 THEN 'Sí' ELSE 'No' END AS acepta_devoluciones
FROM
    Orders O
JOIN
    Merchants M ON O.merchant_id = M.merchant_id
LEFT JOIN
    Refunds R ON O.order_id = R.order_id
WHERE
    O.country IN ('Marruecos', 'Italia', 'España', 'Portugal')
GROUP BY
    O.merchant_id, M.name, O.country
HAVING
    total_operaciones > 10
ORDER BY
    total_operaciones ASC;



-- Ejercicio 3.2

CREATE VIEW tareabasededatos.orders_view AS
SELECT
    O.*,
    M.name AS merchant_name,
    COUNT(R.order_id) AS count_refunds,
    SUM(R.amount) AS sum_refund_amount
FROM
    Orders O
JOIN
    Merchants M ON O.merchant_id = M.merchant_id
LEFT JOIN
    Refunds R ON O.order_id = R.order_id
GROUP BY
    O.order_id, M.name;


SELECT * FROM tareabasededatos.orders_view;


-- Ejercicio 4

SELECT
  merchants.name,
  Round(SUM(refunds.amount),2) AS total_refunds
FROM orders
INNER JOIN refunds
ON orders.order_id = refunds.order_id
INNER JOIN merchants
ON merchants.merchant_id = orders.merchant_id
GROUP BY merchants.name
ORDER BY total_refunds DESC;


SELECT
  status,
  COUNT(*) AS total_orders,
  ROUND(100 * COUNT(*) / (
    SELECT COUNT(*)
    FROM orders
  ), 2) AS percentage
FROM orders
GROUP BY status;



SELECT
  orders.status,
  COUNT(*) AS total_orders,
  ROUND(
    100 * COUNT(*) / (
      SELECT COUNT(*)
      FROM orders
      JOIN merchants
      ON orders.merchant_id = merchants.merchant_id
      WHERE merchants.name IN ('Calcedonia', 'Apple music', 'YouTube music', 'Havainas', 'Kindle')
    ),
    2
  ) AS percentage

FROM orders
JOIN merchants
ON orders.merchant_id = merchants.merchant_id
WHERE merchants.name IN ('Calcedonia', 'Apple music', 'YouTube music', 'Havainas', 'Kindle')
GROUP BY orders.status;


SELECT COUNT(orders.order_id) AS total_orders
FROM orders
JOIN merchants ON orders.merchant_id = merchants.merchant_id



SELECT COUNT(orders.order_id) AS total_orders_refunds
FROM orders
JOIN merchants ON orders.merchant_id = merchants.merchant_id
WHERE merchants.name IN ('Calcedonia', 'Apple Music', 'YouTube Music', 'Havainas', 'Kindle')





