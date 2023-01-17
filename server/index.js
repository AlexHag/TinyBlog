// Please do not look here, it's a warzone

import fs from 'fs';
import fetch from 'node-fetch';

const print = (s) => {
    console.log(s);
};

// fetch('https://dummyjson.com/posts')
// .then(p => p.json())
// .then(p => {
//     fs.writeFile('posts.json', JSON.stringify(p), err => {
//         if (err) {
//           console.error(err);
//         }
//     })
// })

// const data = JSON.parse(fs.readFileSync('./data/posts.json', 'utf8'));
// console.log(data['posts'].length);

// for(let i = 0; i < 30; i++) {
//     await new Promise(r => setTimeout(r, 100));
//     console.log(`https://dummyjson.com/posts/${i+1}/comments`)
//     var commentData = await fetch(`https://dummyjson.com/posts/${i+1}/comments`)
//     var commentDataJson = await commentData.json()
    
//     data['posts'][i]['comments'] = commentDataJson
// }

// fs.writeFile('postsWComments.json', JSON.stringify(data), err => {
//     if (err) {
//         console.error(err);
//     }
// })







// fs.readFile('./data/posts2.json', 'utf8', function(err, fileData){
//     let data = JSON.parse(fileData);
//     console.log(data)
//     for(let i = 0; i < 29; i++) {
//         data['posts'][i] = data['posts'][i + 1]
//     }
//     fs.writeFile('./data/posts4.json', JSON.stringify(data), err => {
//         if (err) {
//             console.error(err);
//         }
//     })
// });







// data['posts'][1]['hello'] = 2
// console.log(data);

// const fileData = fs.readFileSync('./data/postsWComments.json');
// const data = JSON.parse(fileData);

// for(let i = 0; i < 29; i++) {
//     data['posts'][i]['comments'] = data['posts'][i + 1]['comments'];
// }

// fs.writeFile('./data/posts5.json', JSON.stringify(data), err => {
//     if (err) {
//         console.error(err);
//     }
// })







// const fileData = fs.readFileSync('./data/posts.json');
// const data = JSON.parse(fileData);

// for(let i = 0; i < 30; i++) {
//     await new Promise(r => setTimeout(r, 100));
//     let userId = data['posts'][i]['userId']
//     console.log(userId)
//     fetch(`https://randomuser.me/api/?seed=${userId}`)
//     .then(p => p.json())
//     .then(p => {
//         data['posts'][i]['username'] = p['results'][0]['login']['username'];
//         data['posts'][i]['picture'] = p['results'][0]['picture']['large']
//     });
// }

// fs.writeFile('./data/posts_with_userinfo.json', JSON.stringify(data), err => {
//     if (err) {
//         console.error(err);
//     }
// })







// const fileData = fs.readFileSync('./data/posts_with_userinfo.json');
// const data = JSON.parse(fileData);

// for(let i = 0; i < 30; i++) {
//     data['posts'][i]['username'] =  data['posts'][i]['userInfo']['username']
//     data['posts'][i]['picture'] =  data['posts'][i]['userInfo']['picture']
//     data['posts'][i]['userInfo'] = null;
// }

// fs.writeFile('./data/posts_with_userinfo2.json', JSON.stringify(data), err => {
//     if (err) {
//         console.error(err);
//     }
// })








// fetch('https://dummyjson.com/posts')
// .then(p => p.json())
// .then(p => {
//     fs.writeFile('./data2/og_posts.json', JSON.stringify(p), err => {
//         if (err) {
//           console.error(err);
//         }
//     })
// })



// const fileData = fs.readFileSync('C:\\proj\\tinyFullStack\\server\\data2\\only_posts.json');
// const data = JSON.parse(fileData);


// for(let i = 0; i < 30; i++) {
//     await new Promise(r => setTimeout(r, 100));
//     print(i);

//     let comment_req_data = await fetch(`https://dummyjson.com/posts/${i+1}/comments`);
//     let comment_req_json = await comment_req_data.json();
//     data[i]['number_of_comments'] = comment_req_json['total'];

//     let userId = data[i]['userId'];
//     let user_req_data = await fetch(`https://dummyjson.com/users/${userId}`);
//     let user_req_json = await user_req_data.json();
//     data[i]['username'] = user_req_json['username'];
//     data[i]['profile_picture'] = user_req_json['image'];
// }



// fs.writeFile('./data2/posts.json', JSON.stringify(data), err => {
//     if (err) {
//         console.error(err);
//     }
// })

// let out_comment_data = [];

// for(let i = 0; i < 30; i++) {
//     await new Promise(r => setTimeout(r, 100));
//     print(i);

//     let comment_req_data = await fetch(`https://dummyjson.com/posts/${i+1}/comments`);
//     let comment_req_json = await comment_req_data.json();

//     out_comment_data.push({'postId': i+1, 'comments': comment_req_json['comments']})
// }

// fs.writeFile('./data2/comments.json', JSON.stringify(out_comment_data), err => {
//     if (err) {
//         console.error(err);
//     }
// })




const commentsFile = fs.readFileSync('C:\\proj\\tinyFullStack\\server\\data2\\comments.json');
const commentsJson = JSON.parse(commentsFile);

const postsFile = fs.readFileSync('C:\\proj\\tinyFullStack\\server\\data2\\posts.json');
const postsJson = JSON.parse(postsFile);

print(postsJson.find(p => p['userId'] == 27)['username'])

// commentsJson.array.forEach(element => {
//     print(element)
// });

for(let i = 0; i < commentsJson.length; i++) {
    for(let j = 0; j < commentsJson[i]['comments'].length; j++) {
        print(j)
        await new Promise(r => setTimeout(r, 100));
        let thisOneCommentUserId = commentsJson[i]['comments'][j]['user']['id']
        
        let user_req_data = await fetch(`https://dummyjson.com/users/${thisOneCommentUserId}`);
        let user_req_json = await user_req_data.json();

        commentsJson[i]['comments'][j]['user']['profile_picture'] = user_req_json['image']

        // try {
        //     let thisOneCommentUserName = postsJson.find(p => p['userId'] == thisOneCommentUserId)['username']
        //     commentsJson[i]['comments'][j]['user']['userName'] = thisOneCommentUserName;
        // } catch {
        //     commentsJson[i]['comments'][j]['user']['userName'] = null;
        // }

        // try {
        //     let thisOneCommentProfilePicture = postsJson.find(p => p['userId'] == thisOneCommentUserId)['profile_picture']
        //     commentsJson[i]['comments'][j]['user']['profile_picture'] = thisOneCommentProfilePicture;
        // } catch {
        //     commentsJson[i]['comments'][j]['user']['profile_picture'] = null;
        // }
    }
}

fs.writeFile('./data2/comments_and_users.json', JSON.stringify(commentsJson), err => {
    if (err) {
        console.error(err);
    }
})