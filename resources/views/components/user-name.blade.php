@props(['img' => null, 'username'])



<a class="user-name" {{ $attributes }}>
    <div class="user-name__img-box">
        <img class="user-name__img" src="{{ $img ? $img : 'images/empty-profile.jpg' }}" alt="">
    </div>
    <div>{{ $username }}</div>
</a>
