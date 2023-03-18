import Layout from '@/components/Layout'

export default function Custom404() {
  return (
    <Layout title="Error 404 | Brandon Palmeros">
      <div className="grid h-64 place-content-center">
        <p className="text-center">
          Se ha producido un error 404 en el servidor
        </p>
      </div>
    </Layout>
  )
}
