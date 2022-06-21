import Image from "next/image"
import styled from "styled-components"
import { Contents } from "../components/content"

const ICON = require('../../public/image/my_icon.jpg')


const profiles = [
  {
    label: "Name",
    content: "酒尾 快都 / Kaito Sakao"
  },
  {
    label: "From",
    content: "石川県金沢市"
  },
  {
    label: "Write",
    content: "Java/Python/Ruby/JavaScript(TypeScript)/Go"
  },
  {
    label: "Hobby",
    content: "アニメ鑑賞/カラオケ/サイクリング"
  },
  {
    label: "Contact",
    content: "kaito071831@gmail.com"
  }
]

export const Profile = () => {
  return(
    <Contents bgColor="#666666">
      <div>
        <Image
          src={ICON}
          alt="kaito071831 icon"
          width={200}
          height={200}
        />
      </div>
      <div>
        <dl>
          {profiles.map((profile) => (
            <span key={profile.label}>
              <dt>{profile.label}</dt>
              <dd>{profile.content}</dd>
            </span>
          ))}
        </dl>
      </div>
    </Contents>
  )
}
