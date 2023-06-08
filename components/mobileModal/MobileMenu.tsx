import { CloseButton } from "components/button/CloseButton"
import { Text, Title } from "components/typography/Typography"
import Image from "next/image"

export const MobileMenu = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <CloseButton onClick={closeModal} />
      <div className="min-h-[500px] w-[450px] bg-white bg-opacity-95 px-9 pb-12 pt-14">
        <div className="mb-3 px-9">
          <Title size="medium" bold className="mb-2.5">
            DISCOVER OUR ENGAGEMENTS THROUGH GAMES!
          </Title>
          <Text size="small">SCAN THE QR CODE WITH YOUR SMARTPHONE</Text>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <Image src="/images/qr.png" alt="Qr code" width={240} height={240} />
        </div>
        <div className="space-around mt-12 flex w-full items-center">
          <div className="flex flex-1 flex-col items-end">
            <a href="">
              <Image
                src="/images/google.png"
                alt="google"
                width={150}
                height={50}
                className="max-h-[50px] object-cover"
              />
            </a>
          </div>
          <div className="flex flex-1 flex-col items-start">
            <a href="">
              <Image
                src="/images/apple.png"
                alt="google"
                width={150}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
