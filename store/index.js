export const state = () => ({
  // trustdata: []
  trustdata: [
    {
      "id": 1,
      "rank": 1,
      "name": "Fleece Marigold",
      "handle": "marigorangine",
      "image": "https://arweave.net/jtKeH9UqTgV_NCvvjHnEXNwyEcOtvuBrzxyv3OUK9Tc",
      "voteCredits": 134148,
      "votes": 99999
    },
    {
      "id": 2,
      "rank": 2,
      "name": "Miles Tone",
      "handle": "bankzik",
      "image": "https://arweave.net/NsAHwlrhY7s6KzrwFR867-v_e_uv0DZ_slKJSAZxkmQ",
      "voteCredits": "70981",
      "votes": "90990"
    },
    {
      "id": 3,
      "rank": 3,
      "name": "Hilary Ouse",
      "handle": "ousehilary",
      "image": "https://arweave.net/3zq6SWDxb59WlT5jbWigIYQ9MD4HfEPgkDy8A7tRY0M",
      "voteCredits": 123500,
      "votes": 77890
    },
    {
      "id": 4,
      "rank": 4,
      "name": "Manuel  Etiquette",
      "handle": "manuinternetiquette",
      "image": "https://arweave.net/XB5kZtjrvMAL7IW0MmATpvXFLeh2BpJWkKTaRkHjfvo",
      "voteCredits": 89704,
      "votes": 60678
    },
    {
      "id": 5,
      "rank": 5,
      "name": "Barry Tone",
      "handle": "tonebarry",
      "image": "https://arweave.net/R8KA05_YjOcDm86x4uikO4q6ahYZ0UJcYXIZ6VdUuZE",
      "voteCredits": 68710,
      "votes": 30513
    },
    {
      "id": 6,
      "rank": 6,
      "name": "Max Conversion",
      "handle": "conversMax",
      "image": "https://arweave.net/Vt26ucplbOqnyi7OezlZ37TNBcEBuqCVgLb9So4vGXw",
      "voteCredits": 11322,
      "votes": 24148
    },
    {
      "id": 7,
      "rank": 7,
      "name": "Shequonda Bivouac",
      "handle": "Seqbvi777",
      "image": "https://arweave.net/F2EAeEr7nCDT5CHc85XrHthOiu4qMjLQFFUbqEt-SW0",
      "voteCredits": 92456,
      "votes": 19412
    },
    {
      "id": 8,
      "rank": 8,
      "name": "Justine Case",
      "handle": "just_case",
      "image": "https://arweave.net/WJzzRidu-XtOKDy0nseIOf5OmBvu1VTcHl1oxefOLSQ",
      "voteCredits": 23567,
      "votes": 15812
    },
    {
      "id": 9,
      "rank": 9,
      "name": "Jim Séchen"
,      "handle": "LeJim3Sec",
      "image": "https://arweave.net/XNzxq1umqnycDl1Z2dEd2Xd8Qibek0NjNX2Fr0mBcgA",
      "voteCredits": 52135,
      "votes": 12689
    },
    {
      "id": 10,
      "rank": 10,
      "name": "Phillip Anthropy",
      "handle": "phil_anthropy",
      "image": "https://arweave.net/2hMzFX8oo0WxQIRwVxa_Lun_FsQkTTYLeJ3RuM2qzRM",
      "voteCredits": 17539,
      "votes": 12156
    }
  ]
});

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

// export const mutations = {
//   updateTrustData: (state, data) => {
//     state.trustdata = data
//   }
// }

// export const actions = {
//   async getTrustdata({ 
//     state,
//     commit 
//   }) {
//     // commit('updateValue', payload)
//     if (state.trustdata.length) return;

//     try {
//       await fetch(
//         "OUR_ENDPOINT_HERE", {
//           headers: {
//             "Content-Type": "application/json",
//             "x-api-key": process.env.API_KEY
//           }
//         }
//       )
//       .then(response => response.json())
//       .then(data => {
//         commit("updateTrustData", data);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };