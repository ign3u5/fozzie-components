import { shallowMount } from '@vue/test-utils';
import LinkList from '../LinkList.vue';

const wrapper = shallowMount(LinkList, {
    propsData: {
        linkList: {
            title: 'Customer service',
            links: [
                {
                    url: '/contact',
                    text: 'Contact us'
                }
            ]
        }
    }
});

describe('LinkList component', () => {
    it('should be defined', () => {
        expect(wrapper.exists()).toBe(true);
    });

    describe('for narrow viewport widths', () => {
        beforeEach(() => {
            window.innerWidth = 414;
            window.dispatchEvent(new Event('resize'));
        });

        // TODO Figure out how to test with CSS modules
        xit('should be in a collapsed state', () => {
            // Arrange & Act
            const linkListWrapper = wrapper.find('[data-js-test="linkList-wrapper"]');

            // Assert
            expect(linkListWrapper.classes()).toContain('is-collapsed');
        });

        it('should be in an open state when linkList title has been clicked', () => {
            // Arrange
            const linkListWrapper = wrapper.find('[data-js-test="linkList-wrapper"]');
            const linkListHeader = wrapper.find('[data-js-test="linkList-header"]');

            // Act
            linkListHeader.trigger('click');

            // Assert
            expect(linkListWrapper.classes()).not.toContain('is-collapsed');
        });
    });

    describe('for wide viewport widths', () => {
        beforeEach(() => {
            window.innerWidth = 1200;
            window.dispatchEvent(new Event('resize'));
        });

        it('should be in an open state', () => {
            // Arrange & Act
            const linkListWrapper = wrapper.find('[data-js-test="linkList-wrapper"]');

            // Assert
            expect(linkListWrapper.classes()).not.toContain('is-collapsed');
        });
    });
});