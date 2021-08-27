import { Link } from 'react-router-dom';

function SuccessPayment() {
  return(
    <>
      <div className="bg-white">
        <div>                    
          <main className="pt-10 max-w-7xl mx-auto px-4 lg:px-8">
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                <h1>Payment Success</h1>
                <Link to="/deals">Click Here for back to your deal</Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
};

export default SuccessPayment;