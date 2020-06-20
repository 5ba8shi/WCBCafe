1 you.innerHTML = "<p>あなたのカード</p>";
2 you.html("<p>あなたのカード</p>");

1 you.appendChild(para2);
2 you.append(para2);

1 createElement
2  $("<div>", {
     type: 'hidden',
     id: 'row' + i,
   }).appendTo('#allCards');