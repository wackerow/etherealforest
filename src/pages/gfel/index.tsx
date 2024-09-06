import { Link } from "@/components/Link"
import { PageMetadata } from "@/components/PageMetadata"
import { useClipboard } from "@chakra-ui/react"
import { CheckIcon, CopyIcon } from "@chakra-ui/icons"

const ALBERTA_ADDRESS = "5131 NE 23rd Ave, Portland, OR 97211"
const GFEL = () => {
  const { onCopy, hasCopied } = useClipboard(ALBERTA_ADDRESS)
  return (
    <>
      <PageMetadata
        title="GFEL: Sept 11-15, Portland, OR 2024"
        description="General Forum on Ethereum Localism - Portland, OR 2024"
      />
      <div className="max-w-screen-xl px-4 md:px-6 w-full mx-auto">
        <h1 className="mt-12 md:mt-16 text-4xl flex flex-col md:flex-row gap-x-2">
          <span className="first-letter:text-primary first-letter:font-black first-letter:text-6xl">
            General
          </span>
          <span className="first-letter:text-primary first-letter:font-black first-letter:text-6xl">
            Forum&nbsp;on
          </span>
          <span className="first-letter:text-primary first-letter:font-black first-letter:text-6xl">
            Ethereum
          </span>
          <span className="first-letter:text-primary first-letter:font-black first-letter:text-6xl">
            Localism
          </span>
        </h1>
        <Link
          href="/gfel/safety/"
          className="uppercase text-2xl text-primary hover:underline block my-8 w-fit"
        >
          Safety and Code of Conduct
        </Link>

        <Link
          href="https://blocklive.io/gfel2024"
          className="uppercase text-2xl text-primary hover:underline block my-8 w-fit"
        >
          Apply to attend
        </Link>

        {/* <p className="md:text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          distinctio natus doloremque doloribus dignissimos? Deserunt dolorum
          voluptatem tempore cum ipsam iusto ab sint laborum possimus? Commodi
          harum provident saepe maxime.
        </p> */}
        <h2 className="mb-4 first-letter:text-5xl first-letter:text-primary font-black">
          Where?
        </h2>
        <p className="uppercase font-bold text-xl mb-4">Portland, Ore. </p>
        <p className="mb-2">Alberta House</p>
        <button
          type="button"
          className="text-primary text-sm uppercase hover:underline mb-6"
          onClick={onCopy}
        >
          {ALBERTA_ADDRESS} {hasCopied ? <CheckIcon /> : <CopyIcon />}
        </button>
        <p className="mb-2">Alberta Park</p>
        <p className="text-sm uppercase mb-2">
          Alberta Park Trail, Portland, OR 97211
        </p>
        <p className="text-sm uppercase mb-6">
          (2 blocks north, 2 blocks west from Alberta House)
        </p>

        <h2 className="mb-4 first-letter:text-5xl first-letter:text-primary font-black">
          When?
        </h2>
        <h3 className="mb-2 font-medium mt-4">Friday, September 13</h3>
        <p className="">Alberta House</p>
        <h3 className="mb-2 font-medium mt-4">Saturday, September 14</h3>
        <p className="mb-2">AM: Alberta House</p>
        <p className="mb-2">PM: Alberta Park</p>

        <h3 className="mb-2 font-medium mt-4">Sunday, September 15</h3>
        <p className="text-bold">Alberta House</p>
      </div>
    </>
  )
}

export default GFEL
