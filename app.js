// 読み込まれたら表示する
window.onload = function () {
  alert("モンスターが現れた！！！"), document.getElementById("audioOp").play();
};

const damageRange = 0.3;

// 勇者の情報
const playerData = {
  name: "  勇者",
  hp: 100,
  attack: 20,
  diffence: 4,
};

const enemysData = [
  {
    name: "ゴーレム",
    hp: 120,
    attack: 8,
    diffence: 5,
  },
  {
    name: "スライム",
    hp: 50,
    attack: 4,
    diffence: 1,
  },
  {
    name: "CAMP魔王",
    hp: 100,
    attack: 21,
    diffence: 4,
  },
];
// ランダムなモンスター出現
const enemyData = enemysData[Math.floor(Math.random() * enemysData.length)];

// ダメージ計算
function damegeCa(attack, diffence) {
  const maxDamage = attack * (1 + damageRange);
  const minDamage = attack * (1 - damageRange);
  const attackDamage = Math.floor(
    Math.random() * (maxDamage - minDamage) + minDamage
  );
  const damage = attackDamage - diffence;
  if (damage < 1) {
    return 0;
  } else {
    return damage;
  }
}
// console.log(damegeCa(playerData["attack"], enemyData["diffence"]));

// 敵のHP表示
document.getElementById("enName").textContent = enemyData["name"];
document.getElementById("ENHP").textContent = enemyData["hp"];
document.getElementById("EMHP").textContent = enemyData["hp"];

// 勇者のHP表示
document.getElementById("plName").textContent = playerData["name"];
document.getElementById("PNHP").textContent = playerData["hp"];
document.getElementById("PMHP").textContent = playerData["hp"];

// 戦闘のクリック
document.getElementById("attack").addEventListener("click", function () {
  document.getElementById("audioElement").play(),
    document.getElementById("audioBt").play();
  let endgame = false;

  const playerDamage = damegeCa(playerData["attack"], enemyData["diffence"]),
    enemyDamage = damegeCa(enemyData["attack"], playerData["diffence"]);

  enemyData["hp"] = enemyData["hp"] - playerDamage;
  playerData["hp"] = playerData["hp"] - enemyDamage;

  document.getElementById("ENHP").textContent = enemyData["hp"];
  document.getElementById("PNHP").textContent = playerData["hp"];

  // 勝利条件
  if (enemyData["hp"] <= 0) {
    alert("モンスターをやっつけた！！更新して次のモンスターへ");
    endgame = true;
  } else if (playerData["hp"] <= 0) {
    alert("負け。。世界は闇に包まれた。。.更新して再挑戦！");
    endgame = true;
  }
  if (endgame) {
    this.classList.add("deactive");
  }
});
