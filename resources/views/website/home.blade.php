@extends('layouts.website') @section('content')
<link href="{{ asset('css/parallax.css') }}" rel="stylesheet">
<div id="loader" class="loader"></div>
<div style="display:none;" id="tudo_page">
  <header class="header">
    <div class="landing">
      <div id='hero'>
        <div class='layer-bg layer' data-depth='0.10' data-type='parallax'></div>
        <div class='layer-1 layer' data-depth='0.20' data-type='parallax'></div>
        <div class='layer-2 layer' data-depth='0.50' data-type='parallax'></div>
        <div class='layer-3 layer' data-depth='0.80' data-type='parallax'></div>
        <div class='layer-overlay layer' data-depth='0.85' data-type='parallax'></div>
        <div class='layer-4 layer' data-depth='1.00' data-type='parallax'></div>
      </div>
    </div>
  </header>
  <div id='content'>
    <div class='container'>
      <section class='first-section'>
        <div class='row'>
          <div class='col-sm-6'>
            <h1>You cannot hide the soul. Through all his unearthly tattooings, I thought I saw the traces of a simple honest
              heart.
            </h1>
          </div>
        </div>
        <div class='row'>
          <div class='col-sm-6'>
            <p>And besides all this, there was a certain lofty bearing about the Pagan, which even his uncouthness could not
              altogether maim. He looked like a man who had never cringed and never had had a creditor. Whether it was, too,
              that his head being shaved, his forehead was drawn out in freer and brighter relief, and looked more expansive
              than it otherwise would, this I will not venture to decide; but certain it was his head was phrenologically
              an excellent one.</p>
          </div>
          <div class="col-sm-6">
            <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
        </div>
      </section>
    


    </div>
  </div>
</div>
@endsection