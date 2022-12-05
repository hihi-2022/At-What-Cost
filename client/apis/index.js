import { app } from '../../firebase'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

export async function getUserFiltersAPI(uuid) {
  const db = getFirestore(app)

  const docRef = doc(db, 'users', uuid)
  const querySnapshot = await getDoc(docRef)
  const { filters } = querySnapshot.data()
  return filters
}
