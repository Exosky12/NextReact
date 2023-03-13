// ℹ️ Suis les conseils du Lienx 🦁 pour résoudre les erreurs TypeScript.

// 🦁 Ajoute des types primitifs ici
const add = (x:number, y: number) => {
  return x + y;
};

// 🦁 Ajoute des types primitifs ici
const reverse = (text: string, reverseWord: boolean) => {
  const separator = reverseWord ? ' ' : '';
  return text.split(separator).reverse().join(separator);
};

// 👇 Il ne doit plus y avoir d'erreur en dessous 👇
// (tu ne dois pas modifier le code suivant)
// "@ts-expect-error" est une conseigne qui permet de dire que la ligne suivante devrait avoir une erreur.
// Il ne faut pas supprimer ce commentaire, ton but est de **ne plus** avoir d'erreur !

add(1, 4); // 5

// Ici, il devrait avoir une erreur car on attends un number et c'est une string !
// @ts-expect-error
add('test', 4); // expect ts error

reverse('salut les amis', true);
reverse('salut', true);

// Ici on n'accepte que les string !
// @ts-expect-error
reverse(11111, false);

// Le deuxième paramètre ne peut que être un boolean !
// @ts-expect-error
reverse('hey', 'hello');
