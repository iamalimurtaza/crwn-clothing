import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBftSsJ4VKBHgY7RU74y1WxeUjx9V6Rw4U',
	authDomain: 'crown-clothing-react-firebase.firebaseapp.com',
	databaseURL: 'https://crown-clothing-react-firebase.firebaseio.com',
	projectId: 'crown-clothing-react-firebase',
	storageBucket: 'crown-clothing-react-firebase.appspot.com',
	messagingSenderId: '160541003902',
	appId: '1:160541003902:web:97d28277b3e94127a5082f',
	measurementId: 'G-LYJWK8LBFS',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userObj, additionalData) => {
	if (!userObj) return;
	const userRef = firestore.doc(`users/${userObj.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userObj;
		const createdAt = firebase.firestore.FieldValue.serverTimestamp();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error(error);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
