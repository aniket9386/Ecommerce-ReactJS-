import React from 'react';
import '../css/single-page.css';

export default function SinglePage(props) {
    return (
        <>
            <div className='m-1 bg-white'>
                <div className='single-page-sec container py-4 px-2'>
                    <h1 className='text-center mb-4'>{props.title}</h1>
                    <p>{props.content}</p>
                </div>
            </div>
        </>
    )
}
SinglePage.defaultProps = {
    title: 'Page Title',
    content: <><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.Est lorem ipsum dolor sit amet consectetur adipiscing.Etiam tempor orci eu lobortis elementum.Diam vel quam elementum pulvinar etiam non quam.Nec nam aliquam sem et tortor consequat id.Fames ac turpis egestas maecenas pharetra convallis posuere morbi.Nibh cras pulvinar mattis nunc sed blandit libero volutpat.Sed libero enim sed faucibus.Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum.Nisi lacus sed viverra tellus.Ac odio tempor orci dapibus ultrices in iaculis nunc.Tincidunt dui ut ornare lectus sit amet est.Suspendisse sed nisi lacus sed viverra tellus in hac.Eu tincidunt tortor aliquam nulla facilisi cras.Consequat ac felis donec et odio pellentesque diam volutpat commodo.Adipiscing commodo elit at imperdiet.Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.Sem nulla pharetra diam sit amet nisl suscipit.Sollicitudin ac orci phasellus egestas.</p>

        <p>Vitae ultricies leo integer malesuada. Porttitor eget dolor morbi non arcu. Duis at tellus at urna condimentum mattis pellentesque. Neque egestas congue quisque egestas diam in arcu. Eros donec ac odio tempor orci. Sodales ut eu sem integer. In hac habitasse platea dictumst vestibulum. Eget nulla facilisi etiam dignissim diam quis. Non curabitur gravida arcu ac. Tellus id interdum velit laoreet id donec ultrices. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. In cursus turpis massa tincidunt dui. Consectetur a erat nam at lectus urna duis convallis convallis. Pharetra et ultrices neque ornare aenean. In mollis nunc sed id. Suspendisse faucibus interdum posuere lorem ipsum dolor sit.</p>

        <p>Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Pharetra massa massa ultricies mi quis hendrerit dolor. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Suspendisse in est ante in. Ut etiam sit amet nisl purus in. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Dui accumsan sit amet nulla facilisi morbi tempus. Mattis enim ut tellus elementum sagittis vitae et. Quis imperdiet massa tincidunt nunc. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Viverra tellus in hac habitasse platea dictumst vestibulum. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Tortor aliquam nulla facilisi cras.</p>

        <p>Morbi tincidunt ornare massa eget egestas purus. Est ante in nibh mauris cursus mattis. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Pellentesque nec nam aliquam sem et tortor. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Nulla aliquet porttitor lacus luctus. Pretium nibh ipsum consequat nisl vel pretium. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nunc non blandit massa enim nec dui. Dui vivamus arcu felis bibendum ut tristique et egestas. Odio euismod lacinia at quis risus sed vulputate odio. Ipsum dolor sit amet consectetur adipiscing elit. Mauris vitae ultricies leo integer malesuada nunc vel. Odio morbi quis commodo odio.</p>

        <p>Faucibus purus in massa tempor nec feugiat nisl pretium. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Turpis egestas pretium aenean pharetra magna ac placerat. Gravida neque convallis a cras semper auctor neque. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Integer vitae justo eget magna fermentum iaculis eu non. Proin fermentum leo vel orci porta. Sit amet purus gravida quis blandit turpis cursus. Convallis convallis tellus id interdum velit laoreet.</p></>
};
