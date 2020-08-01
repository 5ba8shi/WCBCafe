SELECT *
FROM users
WHERE act = 1
ORDER BY id DESC

SELECT users.id, users.name, users.mail, COUNT(posts.id) AS post_number, COUNT(favorites.id) AS favorites_number
FROM users
LEFT JOIN posts
ON users.id = posts.user
LEFT JOIN favorites
ON users.id = favorites.user
WHEN users.act = 1
AND posts.act = 1
GROUP BY users.id
ORDER BY MAX(posts.id) DESC