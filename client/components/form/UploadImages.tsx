import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Layout from '../form/Layout'
import Container from '../form/Container'
import FormRow from '../form/FormRow'
import Button from '../form/Button'

function UploadImages() {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader()

    file.onload = function () {
      setPreview(file.result)
    }

    file.readAsDataURL(acceptedFiles[0])
  }, [])

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    })

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    if (typeof acceptedFiles[0] === 'undefined') return

    const formData = new FormData()

    formData.append('file', acceptedFiles[0])
    formData.append('upload_preset', '<Your Upload Preset>')
    formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY)

    const results = await fetch('https://api.v1/uploadimages', {
      method: 'POST',
      body: formData,
    }).then((r) => r.json())

    console.log('results', results)
  }

  return (
    <Layout>
      <Container>
        <form
          className="max-w-md border border-gray-200 rounded p-6 mx-auto"
          onSubmit={handleOnSubmit}
        >
          <FormRow className="mb-5">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>
                  Drag and drop some images or files here, or click to select
                </p>
              )}
            </div>
          </FormRow>

          {preview && (
            <p className="mb-5">
              <img src={preview as string} alt="Upload preview" />
            </p>
          )}

          <Button>Submit</Button>
        </form>
      </Container>
    </Layout>
  )
}

export default UploadImages
