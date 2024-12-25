import React from 'react';

const Testimonials = () => {
    return (
        
        <div className="mx-auto w-11/12 flex flex-col justify-center items-center m-4">
        <h2 className="text-center font-bold text-3xl">What People Are Saying</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center">
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <p>
                I lost my wallet and thought it was gone forever, but thanks to this platform, a kind stranger found and returned it to me!
              </p>
              <h2 className="text-center font-bold italic">- Emily Cooper</h2>
              <div className="text-center">
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <p>
                I found a lost pet near my home and used this platform to reunite it with its owner. It was such a rewarding experience!
              </p>
              <h2 className="text-center font-bold italic">- Michael Anderson</h2>
              <div className="text-center">
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <p>
                I was amazed at how quickly I was able to find my lost backpack. This platform is a lifesaver for lost and found items!
              </p>
              <h2 className="text-center font-bold italic">- David Patel</h2>
              <div className="text-center">
                <div className="rating">
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Testimonials;