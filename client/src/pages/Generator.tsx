import Title from "../components/Title"


const Generator = () => {
  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form className="max-w-4xl mx-auto mb-40">
        <Title heading='create In-context Image' description="upload
        your model and product images to generate stunning UGC,
        Short-form videos and social media posts"/>

      <div className="flex gap-20 max-sm:flex-col items-start
      justify-between">
        {/*left col */}
        <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8
        mb-12">
            <p>product Image</p>
            <p>model Image</p>
        </div>
        {/*Right col */}
        <div>
            <p>Right col</p>
        </div>
      </div>

      </form>
    </div>
  )
}

export default Generator
