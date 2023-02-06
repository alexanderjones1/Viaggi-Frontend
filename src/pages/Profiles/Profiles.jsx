import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import styles from './Profiles.module.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <main className={styles.container}>
        <h1>Hello. This is a list of all the profiles.</h1>
        {profiles.length ? 
          <>
            {profiles.map(profile =>
              <p key={profile._id}>{profile.name}</p>
            )}
          </>
        :
          <p>No profiles yet</p>
        }
      </main>
    </>
  )
}
 
export default Profiles