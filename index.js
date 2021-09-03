'use strict';

// Primitive Type
// int, string, float, double, bool

let v1 = 10; // int
let v2 = "string"; // string
let v3 = true; // boolean
let v4 = 3.14; // float

// Object Type => 실제로 존재하는 사물
// Property + Method
// Property : Primitive Type 집합체
// Method(행위) = Function

let person = {
    /*
        Method
        1. 움직인다.
        2. 말을 한다.

        Property
        1. 이름
        2. 성별
        3. 나이
        4. 키
        5. 몸무게
    */

    name: "양석준",
    sex: "man",
    age: 21,
    height: 177,
    weight: 85,
    move: function (destination) {
        console.log(destination + "으로 이동합니다.");
    },
    say: function(talk) {
        console.log(this.name + " : " + talk);
    }
};

console.log(person);
person.move("북한");
person.say("빨리빨리 움직이라우");

//=============================================================

let person2 = {};
person2.name = "양석준";
person2.sex = "man";
person2.age = 21;
person2.height = 177;
person2.weight = 85;

console.log(person2);

//=============================================================

// Quiz. Person을 만들어 주는 함수를 작성해 주세요.

function makePerson(name, age, sex, height, weight) {
   return {
        name: name,
        sex: sex,
        age: age,
        height: height,
        weight: weight,
        move: function (destination) {
            console.log(destination + "으로 이동합니다.");
        },
        say: function(talk) {
            console.log(this.name + " : " + talk);
        }
    }
}

let p1 = makePerson ("Seok-jun Yang", 23, "man", 177, 100);
p1.move("미국");
p1.say("해윙");