// WARNING: This code is purposefully bad. Lots of things in here you
// would not want to do in a production codebase. However it simulates
// well that code is hard, and often hard to read. Such as we still
// need to maintain hard to read code, this makes for some good 
// Bug & Debug learning sessions.

import { ENGINE } from '../util/10.debugger.engine';

let c_name = 'Sir Joseph';
let c_class = 'Knight';
let c_lvl = 2;
let c_hp = 20;
let c_evade = 5 // 5% chance to reduce damage after resistances/def are calculated by 1/2;
let c_luck = 10; // Luck is not used with percentages. The lower the luck the better.
// let c_counter = 2 // 2% chance to counter an attack;
let armor = 'Full Plate';
// let weapon = 'Longsword';
let hasShield = true;

// d_type = the type of damage
// dmg = amount of damage attempting to deal
// ap = how well it penetrates armor
// srpe_att (bool) = was it a surprise attack?
// char_att = the attacking character
function defendAgainstAttack( d_type: any, dmg: any, ap: any, srpe_att: any, _char_att: any ) {
  var d = dmg

  // surprise attacks do more damage
  if(srpe_att) {
    d = d * 1.5
  }

  // when you see it coming, there is a chance that you get to evade part of the damage
  if(!srpe_att && (ENGINE.evade_chance() > 100 - c_evade)) {
    d = d / 1.25; // consider redesigning this feature, the original value was way to strong, temp reducing the divider
  }

  // modify damage based on your resistances to the different types
  switch(d_type) {
    case 'standard':
      d -= c_class == 'Knight' ? 10 : 0; // Warriors get a special resistance to standard damage
      break;
    case 'magic':
      d -= c_class == 'Wizard' ? 10 : 1; // Magi get a special resistance to magic damage
      break;
    case 'earth':
      d -= 1;
      break;
    case 'fire':
      d -= 1;
      break;
    case 'water':
      d -= 1;
      break;
    case 'wind':
      d -= 1;
      break;
    case 'shadow':
      d -= c_class == 'Shinobi' ? 10 : 1; // Rogue get a special resistance to shadow damage
      break;
    case 'ice':
      d -= 1;
      break;
    case 'lightning':
      d -= 1;
      break;
    case 'dark':
      d -= 1;
      break;
    case 'light':
      d -= 1;
      break;
    case 'psionic':
      d -= 1;
      break;
    default:
      d -= 0;
      break;
  }

  // modify damage based on armor worn
  if(armor == 'Leather') {
    if(!srpe_att) { // characters don't get to use armor values when surprise attacked
      if(hasShield) { // Shields add 2 to defense
        d -= (2 - ap);
      } else {
        d -= (4 - ap);
      }
    }
  } else if(armor == 'Chain mail') {
    if(!srpe_att) { // characters don't get to use armor values when surprise attacked
      if(hasShield) { // Shields add 2 to defense
        d -= (6 - ap);
      } else {
        d -= (4 - ap);
      }
    }
  } else if(armor == 'Full Plate') {
    if(srpe_att) { // characters don't get to use armor values when surprise attacked
      if(hasShield) { // Shields add 2 to defense
        d -= (12 - ap);
      } else {
        d -= (10 - ap);
      }
    }
  }

  // make sure we don't give them hp when they block it
  if(d < 0) {
    d = 0;
  }

  d = Math.floor(d);

  // apply the damage
  c_hp = c_hp - d;

  // NOTE: this is becoming to painful, removing until we figure out
  // how to handle all the different combos for the counter attack
  // if this.c_hp > 0 && !srpe_att && (rand(100) + 1 < this.c_counter)
  //   if(this.c_class == 'Knight' && this.weapon == 'Short Sword') {
  //     char_att.dmg('physical', rand(10) + 2, 0, false)
  //   }
  //   if(this.c_class == 'Knight' && this.weapon == 'Longsword') {
  //     char_att.dmg('physical', rand(20) + 2, 0, false)
  //   }
  //   if(this.c_class == 'Knight' && this.weapon == 'Battle Axe') {
  //     char_att.dmg('physical', rand(11) + 10, 0, false)
  //   }
  //   if(this.c_class == 'Wizard' && this.weapon == 'Fireball') {
  //     char_att.dmg('fire', rand(10) + 6, 0, false)
  //   }
  //   if(this.c_class == 'Wizard' && this.weapon == 'Ice Spikes') {
  //     char_att.dmg('ice', rand(10) + 6, 0, false)
  //   }
  //   if(this.c_class == 'Wizard' && this.weapon == 'Crushing Grasp') {
  //     char_att.dmg('magic', rand(10) + 6, 0, false)
  //   }
  //   if(this.c_class == 'Shinobi' && this.weapon == 'Tanto') {
  //     char_att.dmg('magic', rand(6) + 6, 6, false)
  //   }
  //   if(this.c_class == 'Shinobi' && this.weapon == 'Ninjato') {
  //     char_att.dmg('magic', rand(12) + 6, 3, false)
  //   }
  // }

  // display results
  if(d == 0) {
    const luckRoll = c_luck + ENGINE.luck_chance(); // WARN: We were told we have to use luck here, but that it should always kick for beginning characters.
    let safeMsg = 'You suffered no damage from the attack, way to go!'
    if(luckRoll < 21) {
      safeMsg += ' Lucky day! You defended the attack so well you gain 1 HP!';
      c_hp += 3;
    }
    return safeMsg;
  } else if(c_hp <= 0) {
    c_lvl -= 1
    return `You ${ c_name } have perished. You respawn back at town square but have suffered loss in level. You are now level ${ c_lvl }.`;
  } else {
    return `You have suffered ${ d } wounds and now have ${ c_hp } health left.`;
  }
}


// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Debug Bug #72

// Recieved -> "You Sir Joseph have perished. You respawn back at town square but have suffered loss in level. You are now level 1."
// Expected -> "You have suffered 12 wounds and now have 8 health left."

const shinyResult1 = defendAgainstAttack('standard', 32, 2, false, null);
console.log(shinyResult1);

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Debug Bug #72

// Recieved -> "You suffered no damage from the attack, way to go!"
// Expected -> "You suffered no damage from the attack, way to go! Lucky day! You defended the attack so well you gain 1 HP!"

const shinyResult2 = defendAgainstAttack('standard', 1, 0, false, null);
console.log(shinyResult2);

// ------------------------------------------------------------------------------------------------------------------------------------------------------
