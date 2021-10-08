<form class="filter-box" method="GET" action="{{ url()->current()  }}">
    {{ $slot }}
    <button class="filter-box__button" type="submit">Filter</button>
</form>
