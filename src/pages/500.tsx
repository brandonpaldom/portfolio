import Layout from '@/components/Layout'

export default function Custom500() {
  return (
    <Layout title="Error 500 | Brandon Palmeros">
      <div className="grid h-64 place-content-center">
        <p className="text-center">
          Se ha producido un error 500 en el servidor
        </p>
      </div>
    </Layout>
  )
}
