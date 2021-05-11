<template>
  <div class="text-base text-blue-700">
    <div class="flex flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between space-y-5">
      <div>
        Quadratic Trust is a challenge where members of the community can vote to support you and your work-but instead of supporting you with money, like with Quadratic Funding, they support you with their social capital in the community.
      </div>  
      <div>
        To participate, share a tweet about the person you're supporting and why they get your vote. Your follower count determines the number of voting credits you have to distribute amongst the people you want to vote for. Just like with Quadratic Funding, the number of people who give you votes matters more than the number of votes they give you.
      </div>
      <div>
        Get started by supporting your favourite people today - the winner gets a special NFT!
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head(){
    return {
      title: 'About',
      meta: [{
        name: 'description',
        content: 'This is the about page!',
        hid: 'description'
      }]
    }
  },
}
</script>