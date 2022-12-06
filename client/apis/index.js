import { app } from '../../firebase'
import { getFirestore, getDoc, setDoc, doc } from 'firebase/firestore'

export async function getUserFiltersAPI(uuid) {
  const db = getFirestore(app)

  const docRef = doc(db, 'users', uuid)
  const querySnapshot = await getDoc(docRef)
  if (querySnapshot.exists()) {
    const { filters } = querySnapshot.data()
    return filters
  }
  return null
}

export async function updateUserFiltersAPI(uuid, filters) {
  const db = getFirestore(app)
  const docRef = doc(db, 'users', uuid)
  const updatedFilters = { filters }
  await setDoc(docRef, updatedFilters)
}
