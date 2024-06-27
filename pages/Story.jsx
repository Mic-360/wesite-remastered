import Layout from '../src/layout';

const Story = () => {
  return (
    <Layout>
      <div className='bg-white text-black px-10 py-20'>
        <div className='px-20 flex justify-between'>
          <h1 className='text-5xl'>Our Team</h1>
          <p className='max-w-96 text-left'>
            We bring a diverse range of skills and expertise <br />
            to the table, and we are committed to support our <br />
            portfolio companies in the ups and downs of early-
            <br />
            stage growth.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-20 place-items-center py-20'>
          {members.map((member, i) => (
            <div
              key={i}
              className='h-[20rem] w-[20rem] bg-gray-300'
            >
              <div className='bg-gray-300 h-full'>
                <img
                  src={member.img}
                  alt='team'
                  className='h-full w-full object-cover'
                />
                <div className='text-left p-2'>
                  <h1 className='font-medium'>{member.name}</h1>
                  <div className='flex justify-between items-center text-plume uppercase text-xs'>
                    <p>{member.title}</p>
                    <p className='space-x-2 underline underline-offset-2'>
                      <a
                        href=''
                        target='_blank'
                      >
                        {member.mail}
                      </a>
                      <a
                        href=''
                        target='_blank'
                      >
                        {member.linkedin}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Story;

const members = [
  {
    name: 'Jane Doe',
    title: 'CEO',
    img: './team/giddo.jpg',
    mail: 'Mail',
    linkedin: 'Linkedin',
  },
  {
    name: 'John Smith',
    title: 'CTO',
    img: './team/puru.jpg',
    mail: 'Mail',
    linkedin: 'Linkedin',
  },
  {
    name: 'Jane Doe',
    title: 'CEO',
    img: './team/poti.jpg',
    mail: 'Mail',
    linkedin: 'Linkedin',
  },
  {
    name: 'Emily Johnson',
    title: 'COO',
    img: './team/mic.jpg',
    mail: 'Mail',
    linkedin: 'Linkedin',
  },
  {
    name: 'Olivia Davis',
    title: 'CMO',
    img: './team/prthm.jpg',
    mail: 'Mail',
    linkedin: 'Linkedin',
  },
  {
    name: 'William Wilson',
    title: 'CIO',
    img: './team/mohit.jpg',
    mail: 'Mail',
    linkedin: 'Linkedin',
  },
  {
    name: 'Michael Brown',
    title: 'CFO',
    img: './team/sohn.jpg',
    mail: 'Mail',
    linkedin: 'Linkedin',
  },
  {
    name: 'Sophia Taylor',
    title: 'HR Manager',
    img: './team/dinesh.jpg',
    mail: 'Mail',
    linkedin: 'Linkedin',
  },
  {
    name: 'James Anderson',
    title: 'Marketing Manager',
    img: './team/deb.jpg',
    mail: 'Mail',
    linkedin: 'Linkedin',
  },
];